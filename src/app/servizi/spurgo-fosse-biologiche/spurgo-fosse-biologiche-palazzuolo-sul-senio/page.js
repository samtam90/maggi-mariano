import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Palazzuolo sul Senio",
  canonical: links.servizi["spurgo-fosse-biologiche"]["palazzuolo-sul-senio"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Palazzuolo sul Senio", 
    locationNames: {label: "Palazzuolo sul Senio", href: "palazzuolo-sul-senio"}  
});
