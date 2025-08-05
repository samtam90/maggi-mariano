import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Palazzuolo sul Senio",
  canonical: links.servizi["pulizia-fognature"]["palazzuolo-sul-senio"],
});
export default withBaseProps({
  title: "Pulizia fognature Palazzuolo sul Senio",
  locationNames: { label: "Palazzuolo sul Senio", href: "palazzuolo-sul-senio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
