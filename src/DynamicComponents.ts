import A from "./A";
import B from "./B";
import C from "./C";
import { registerComponent } from "./DynamicComponent";

registerComponent("A", A);
registerComponent("B", B);
registerComponent("B", C);
