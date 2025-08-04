import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Bari",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Bari", 
    locationNames: {label: "Bari", href: "bari"}  
});