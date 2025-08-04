import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Trevi",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Trevi", 
    locationNames: {label: "Trevi", href: "trevi"}  
});