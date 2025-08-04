import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Spoleto",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Spoleto", 
    locationNames: {label: "Spoleto", href: "spoleto"}  
});