import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Palazzuolo sul Senio",
  canonical: links.servizi["noleggio-bagni-chimici"]["palazzuolo-sul-senio"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Palazzuolo sul Senio",
  locationNames: { label: "Palazzuolo sul Senio", href: "palazzuolo-sul-senio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
