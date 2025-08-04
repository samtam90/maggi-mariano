import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pergine Valdarno",
  canonical: links.servizi["trasporto-rifiuti"]["pergine-valdarno"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pergine Valdarno", 
    locationNames: {label: "Pergine Valdarno", href: "pergine-valdarno"}  
});