import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Monza Brianza",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Monza Brianza", 
    locationNames: {label: "Monza Brianza", href: "monza-brianza"}  
});