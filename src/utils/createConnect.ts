import { Store } from "redux";
import { directive, TemplateResult } from "lit-html";

export const createConnect = <S extends {}, D extends {}>(store: Store) => (
  mapStateToProps: (_: unknown) => S,
  mapDispatchToProps: (_: unknown) => D
) => (template: (_: S & D) => TemplateResult) => {
  directive(() => (part: any) => {
    store.subscribe(() => {
      const states = mapStateToProps(store.getState());
      const handlers = mapDispatchToProps(store.dispatch);
      part.setValue(template({ ...states, ...handlers }));
      part.commit();
    });
  });
};
