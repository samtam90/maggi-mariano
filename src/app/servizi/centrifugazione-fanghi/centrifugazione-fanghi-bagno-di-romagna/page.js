import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Bagno di Romagna",
  canonical: links.servizi["centrifugazione-fanghi"]["bagno-di-romagna"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Bagno di Romagna",
  locationNames: { label: "Bagno di Romagna", href: "bagno-di-romagna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
