import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Palazzuolo sul Senio",
  canonical: links.servizi["noleggio-bagni-chimici"]["palazzuolo-sul-senio"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Palazzuolo sul Senio", 
  locationNames: {label: "Palazzuolo sul Senio", href: "palazzuolo-sul-senio"} 
});
