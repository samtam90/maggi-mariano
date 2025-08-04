import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Giano dell'Umbria",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Giano dell'Umbria", 
    locationNames: {label: "Giano dell'Umbria", href: "giano-dell-umbria"}  
});