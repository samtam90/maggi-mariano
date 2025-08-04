import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Napoli",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Napoli", 
    locationNames: {label: "Napoli", href: "napoli"}  
});