import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri [name]",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri [name]", 
    locationNames: {label: "[name]", href: "[path]"}  
});