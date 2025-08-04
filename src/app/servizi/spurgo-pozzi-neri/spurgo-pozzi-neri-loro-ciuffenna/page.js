import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Loro ciuffenna",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Loro ciuffenna", 
    locationNames: {label: "Loro ciuffenna", href: "loro-ciuffenna"}  
});