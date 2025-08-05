import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Narni",
  canonical: links.servizi["centrifugazione-fanghi"]["narni"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Narni",
  locationNames: { label: "Narni", href: "narni" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
