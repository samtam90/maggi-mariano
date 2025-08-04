import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Grosseto",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Grosseto", 
    locationNames: {label: "Grosseto", href: "grosseto"}  
});