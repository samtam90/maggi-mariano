import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Figline Valdarno",
  canonical: links.servizi["trasporto-acqua"]["figline-valdarno"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Figline Valdarno", 
    locationNames: {label: "Figline Valdarno", href: "figline-valdarno"}  
});