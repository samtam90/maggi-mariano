import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cerreto Guidi",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cerreto Guidi", 
    locationNames: {label: "Cerreto Guidi", href: "cerreto-guidi"}  
});