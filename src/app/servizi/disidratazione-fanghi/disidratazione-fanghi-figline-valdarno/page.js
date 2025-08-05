import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Figline Valdarno",
  canonical: links.servizi["disidratazione-fanghi"]["figline-valdarno"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Figline Valdarno",
  locationNames: { label: "Figline Valdarno", href: "figline-valdarno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
