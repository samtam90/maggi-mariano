import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Palazzuolo sul Senio",
  canonical: links.servizi["spurgo-pozzi-neri"]["palazzuolo-sul-senio"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Palazzuolo sul Senio", 
    locationNames: {label: "Palazzuolo sul Senio", href: "palazzuolo-sul-senio"}  
});