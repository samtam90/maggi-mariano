import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Figline Valdarno",
  canonical: links.servizi["trasporto-rifiuti"]["figline-valdarno"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Figline Valdarno", 
    locationNames: {label: "Figline Valdarno", href: "figline-valdarno"}  
});