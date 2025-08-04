import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Montefalco",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Montefalco", 
    locationNames: {label: "Montefalco", href: "montefalco"}  
});