import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Pergine Valdarno",
  canonical: links.servizi["disidratazione-fanghi"]["pergine-valdarno"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Pergine Valdarno",
  locationNames: { label: "Pergine Valdarno", href: "pergine-valdarno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
