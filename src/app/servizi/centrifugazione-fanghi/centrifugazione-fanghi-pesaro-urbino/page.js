import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Pesaro-Urbino",
  canonical: links.servizi["centrifugazione-fanghi"]["pesaro-urbino"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Pesaro-Urbino",
  locationNames: { label: "Pesaro-Urbino", href: "pesaro-urbino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["pesaro-urbino"],
      name: "Pesaro-Urbino",
  }),
});
