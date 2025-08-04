import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Rufina",
  canonical: links.servizi["trasporto-acqua"]["rufina"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Rufina", 
    locationNames: {label: "Rufina", href: "rufina"}  
});