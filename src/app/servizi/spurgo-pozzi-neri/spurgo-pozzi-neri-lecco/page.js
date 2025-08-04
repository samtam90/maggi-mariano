import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Lecco",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Lecco", 
    locationNames: {label: "Lecco", href: "lecco"}  
});