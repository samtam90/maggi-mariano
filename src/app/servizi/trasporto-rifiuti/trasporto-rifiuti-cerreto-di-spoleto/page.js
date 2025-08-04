import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cerreto di Spoleto",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cerreto di Spoleto", 
    locationNames: {label: "Cerreto di Spoleto", href: "cerreto-di-spoleto"}  
});