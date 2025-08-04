import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Palazzuolo sul Senio",
  canonical: links.servizi["pulizia-fognature"]["palazzuolo-sul-senio"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Palazzuolo sul Senio", 
    locationNames: {label: "Palazzuolo sul Senio", href: "palazzuolo-sul-senio"}  
});
