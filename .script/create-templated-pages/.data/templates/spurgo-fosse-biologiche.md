import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche [name]",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche [name]", 
    locationNames: {label: "[name]", href: "[path]"}  
});
