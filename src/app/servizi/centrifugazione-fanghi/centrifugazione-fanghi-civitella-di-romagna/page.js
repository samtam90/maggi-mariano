import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Civitella di Romagna",
  canonical: links.servizi["centrifugazione-fanghi"]["civitella-di-romagna"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Civitella di Romagna",
  locationNames: { label: "Civitella di Romagna", href: "civitella-di-romagna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
