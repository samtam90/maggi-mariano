import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Narni",
  canonical: links.servizi["disidratazione-fanghi"]["narni"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Narni",
  locationNames: { label: "Narni", href: "narni" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
