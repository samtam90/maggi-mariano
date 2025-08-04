import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Pergine Valdarno",
  canonical: links.servizi["trasporto-acqua"]["pergine-valdarno"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Pergine Valdarno", 
    locationNames: {label: "Pergine Valdarno", href: "pergine-valdarno"}  
});