import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Calenzano",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Calenzano", 
    locationNames: {label: "Calenzano", href: "calenzano"}  
});