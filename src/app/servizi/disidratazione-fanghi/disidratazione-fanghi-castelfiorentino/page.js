import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Castelfiorentino",
  canonical: links.servizi["disidratazione-fanghi"]["castelfiorentino"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Castelfiorentino",
  locationNames: { label: "Castelfiorentino", href: "castelfiorentino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
