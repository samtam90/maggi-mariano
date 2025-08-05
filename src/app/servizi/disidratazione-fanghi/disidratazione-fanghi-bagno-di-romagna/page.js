import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Bagno di Romagna",
  canonical: links.servizi["disidratazione-fanghi"]["bagno-di-romagna"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Bagno di Romagna",
  locationNames: { label: "Bagno di Romagna", href: "bagno-di-romagna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
