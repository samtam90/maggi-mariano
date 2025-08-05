import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Sondrio",
  canonical: links.servizi["disidratazione-fanghi"]["sondrio"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Sondrio",
  locationNames: { label: "Sondrio", href: "sondrio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["sondrio"],
      name: "Sondrio",
  }),
});
