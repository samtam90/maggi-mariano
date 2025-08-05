import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Palazzuolo sul Senio",
  canonical: links.servizi["disidratazione-fanghi"]["palazzuolo-sul-senio"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Palazzuolo sul Senio",
  locationNames: { label: "Palazzuolo sul Senio", href: "palazzuolo-sul-senio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
