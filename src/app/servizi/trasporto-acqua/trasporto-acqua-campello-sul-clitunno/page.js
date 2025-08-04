import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Campello sul Clitunno",
  canonical: links.servizi["trasporto-acqua"]["campello-sul-clitunno"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Campello sul Clitunno", 
    locationNames: {label: "Campello sul Clitunno", href: "campello-sul-clitunno"}  
});