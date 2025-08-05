import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Montecastrilli",
  canonical: links.servizi["disidratazione-fanghi"]["montecastrilli"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Montecastrilli",
  locationNames: { label: "Montecastrilli", href: "montecastrilli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
