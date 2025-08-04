import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Palazzuolo sul Senio",
  canonical: links.servizi["trasporto-rifiuti"]["palazzuolo-sul-senio"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Palazzuolo sul Senio", 
    locationNames: {label: "Palazzuolo sul Senio", href: "palazzuolo-sul-senio"}  
});