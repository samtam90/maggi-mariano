import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pratovecchio Stia",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pratovecchio Stia", 
    locationNames: {label: "Pratovecchio Stia", href: "pratovecchio-stia"}  
});