import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Gualdo Tadino",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Gualdo Tadino", 
    locationNames: {label: "Gualdo Tadino", href: "gualdo-tadino"}  
});