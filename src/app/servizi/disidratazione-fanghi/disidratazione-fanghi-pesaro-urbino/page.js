import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Pesaro-Urbino",
  canonical: links.servizi["disidratazione-fanghi"]["pesaro-urbino"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Pesaro-Urbino",
  locationNames: { label: "Pesaro-Urbino", href: "pesaro-urbino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["pesaro-urbino"],
      name: "Pesaro-Urbino",
  }),
});
