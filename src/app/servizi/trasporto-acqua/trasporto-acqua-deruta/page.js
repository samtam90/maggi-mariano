import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Deruta",
  canonical: links.servizi["trasporto-acqua"]["deruta"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Deruta", 
    locationNames: {label: "Deruta", href: "deruta"}  
});