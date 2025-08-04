import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pratovecchio Stia",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pratovecchio Stia", 
    locationNames: {label: "Pratovecchio Stia", href: "pratovecchio-stia"}  
});