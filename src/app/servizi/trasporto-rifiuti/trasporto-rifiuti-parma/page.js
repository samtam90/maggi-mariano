import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Parma",
  canonical: links.servizi["trasporto-rifiuti"]["parma"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Parma", 
    locationNames: {label: "Parma", href: "parma"}  
});