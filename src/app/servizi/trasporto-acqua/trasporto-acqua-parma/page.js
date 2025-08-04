import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Parma",
  canonical: links.servizi["trasporto-acqua"]["parma"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Parma", 
    locationNames: {label: "Parma", href: "parma"}  
});