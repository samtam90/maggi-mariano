import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Montecastrilli",
  canonical: links.servizi["centrifugazione-fanghi"]["montecastrilli"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Montecastrilli",
  locationNames: { label: "Montecastrilli", href: "montecastrilli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
