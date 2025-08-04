import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Palazzuolo sul Senio",
  canonical: links.servizi["trasporto-acqua"]["palazzuolo-sul-senio"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Palazzuolo sul Senio", 
    locationNames: {label: "Palazzuolo sul Senio", href: "palazzuolo-sul-senio"}  
});