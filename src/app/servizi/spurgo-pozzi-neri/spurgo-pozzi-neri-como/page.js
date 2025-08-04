import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Como",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Como", 
    locationNames: {label: "Como", href: "como"}  
});